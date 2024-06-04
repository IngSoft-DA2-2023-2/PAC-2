
using System.IO;
using System.Reflection;

namespace MyWebApi.Services.LoadAssembly
{
    public sealed class LoadAssemblyService<T> : ILoadAssemblyService<T>
        where T : class
    {
        private readonly DirectoryInfo directory;
        private List<Type> importers;

        public LoadAssemblyService(string path)
        {
            this.directory = new DirectoryInfo(path);
            this.importers = new List<Type>();
        }

        public List<T> GetAll(string directory)
        {
            var files = this.directory
                .GetFiles("*.dll")
                .ToList();

            importers = new List<Type>();
            files.ForEach(file =>
            {
                Assembly assemblyLoaded = Assembly.LoadFile(file.FullName);
                List<Type> loadedTypes = assemblyLoaded
                    .GetTypes()
                    .Where(t => t.IsClass && typeof(ISorter).IsAssignableFrom(t))
                    .ToList();

                if (loadedTypes.Count == 0)
                {
                    throw new Exception("No hay importadores en el path dado");
                }

                this.importers = importers
                    .Union(loadedTypes)
                    .ToList();
            });
            var instances = new List<T>();
            foreach (var type in this.importers)
            {
                T instance = (T)Activator.CreateInstance(type);
                instances.Add(instance);
            }

            return instances;
        }

        public T GetByIdentifier(string identifier)
        {
            var files = this.directory
                .GetFiles("*.dll")
                .ToList();

            importers = new List<Type>();
            files.ForEach(file =>
            {
                Assembly assemblyLoaded = Assembly.LoadFile(file.FullName);
                List<Type> loadedTypes = assemblyLoaded
                    .GetTypes()
                    .Where(t => t.IsClass && typeof(ISorter).IsAssignableFrom(t))
                    .ToList();

                if (loadedTypes.Count == 0)
                {
                    throw new Exception("No hay importadores en el path dado");
                }

                this.importers = importers
                    .Union(loadedTypes)
                    .ToList();
            });
            
            Type type = this.importers.FirstOrDefault(t => t.Name.Equals(identifier, StringComparison.OrdinalIgnoreCase));

            if (type == null)
            {
                throw new Exception($"No se encontró un importador con el identificador '{identifier}'");
            }
            
            T instance = (T)Activator.CreateInstance(type);
            return instance;
        }
    }
}
