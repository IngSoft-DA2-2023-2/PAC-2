
using System.IO;
using System.Reflection;

namespace MyWebApi.Services.LoadAssembly
{
    public sealed class LoadAssemblyService<T> : ILoadAssemblyService<T>
        where T : class
    {
        public List<T> GetAll(string directory)
        {
            var assemblies = Directory.GetFiles(directory, "*.dll");
            var result = new List<T>();

            foreach (var assembly in assemblies)
            {
                var loadedAssembly = Assembly.LoadFile(assembly);
                var types = loadedAssembly.GetTypes();

                foreach (var type in types)
                {
                    if (type.GetInterface(typeof(T).Name) != null)
                    {
                        var instance = Activator.CreateInstance(type) as T;
                        result.Add(instance);
                    }
                }
            }

            return result;
        }

        public T GetByIdentifier(string identifier)
        {
            var assemblies = Directory.GetFiles(Directory.GetCurrentDirectory(), "*.dll");

            foreach (var assembly in assemblies)
            {
                var loadedAssembly = Assembly.LoadFile(assembly);
                var types = loadedAssembly.GetTypes();

                foreach (var type in types)
                {
                    if (type.GetInterface(typeof(T).Name) != null)
                    {
                        var instance = Activator.CreateInstance(type) as T;

                        if (instance.GetType().GetProperty("Identifier").GetValue(instance).ToString() == identifier)
                        {
                            return instance;
                        }
                    }
                }
            }

            return null;
        }
    }
}
