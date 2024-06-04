using System.Reflection;

namespace MyWebApi.Services.LoadAssembly
{
    public sealed class LoadAssemblyService<IInterface> : ILoadAssemblyService<IInterface>
        where IInterface : class
    {
        private List<Type> implementations = new List<Type>();
        
        public List<IInterface> GetAll(string directory)
        {
            var parsedDirectory = new DirectoryInfo(directory);
            
            var files = parsedDirectory
                .GetFiles("*.dll")
                .ToList();

            implementations = new List<Type>();
            files.ForEach(file =>
            {
                Assembly assemblyLoaded = Assembly.LoadFile(file.FullName);
                var loadedTypes = assemblyLoaded
                    .GetTypes()
                    .Where(t => t.IsClass && typeof(IInterface).IsAssignableFrom(t))
                    .ToList();

                if (loadedTypes.Count == 0)
                {
                    Console.WriteLine($"Nadie implementa la interfaz: {typeof(IInterface).Name} en el assembly: {file.FullName}");

                    return;
                }

                this.implementations = implementations
                    .Union(loadedTypes)
                    .ToList();
            });
            
            var instances = new List<IInterface>();
            foreach (var implementation in implementations)
            {
                var instance = Activator.CreateInstance(implementation) as IInterface;
                if (instance != null)
                {
                    instances.Add(instance);
                }
            }

            return instances;
        }

        public IInterface GetByIdentifier(string identifier)
        {
            var type = implementations.Find(s => s.FullName == identifier);

            return Activator.CreateInstance(type) as IInterface;
        }
    }
}
