
using System.IO;
using System.Reflection;

namespace MyWebApi.Services.LoadAssembly
{
    public sealed class LoadAssemblyService<T> : ILoadAssemblyService<T>
        where T : class
    {
        public List<T> GetAll(string directory)
        {
            var implementations = new List<T>();

            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, directory);

            if (!Directory.Exists(path))
            {
                return implementations;
            }

            var files = Directory.GetFiles(path, "*.dll");

            foreach (var file in files)
            {
                var assembly = Assembly.LoadFile(file);

                var types = assembly.GetTypes();

                foreach (var type in types)
                {
                    if (type.GetInterface(typeof(T).Name) != null)
                    {
                        var instance = Activator.CreateInstance(type) as T;

                        implementations.Add(instance);
                    }
                }
            }

            return implementations;
        }

        public T GetByIdentifier(string identifier)
        {
            throw new NotImplementedException();
        }
    }
}
