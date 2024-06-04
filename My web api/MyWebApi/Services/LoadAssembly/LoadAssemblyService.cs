using System.IO;
using System.Reflection;

namespace MyWebApi.Services.LoadAssembly
{
    public sealed class LoadAssemblyService<T> : ILoadAssemblyService<T>
        where T : class
    {
        public List<T> GetAll(string directory)
        {
            var assemblies = new List<T>();
            if (Directory.Exists(directory))
            {
                var files = Directory.GetFiles(directory, "*.dll");
                foreach (var file in files)
                {
                    try
                    {
                        var assembly = Assembly.LoadFrom(file);

                        if (assembly != null)
                        {
                            var types = assembly.GetTypes().Where(t => t.IsClass && typeof(T).IsAssignableFrom(t));

                            foreach (var type in types)
                            {
                                var instance = Activator.CreateInstance(type) as T;
                                if (instance != null)
                                {
                                    assemblies.Add(instance);
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        throw new Exception("Error loading assembly", ex);
                    }
                }
            }

            return assemblies;
        }

        public T GetByIdentifier(string identifier)
        {
            var assemblies = GetAll("MyWebApi/Sorters");

            foreach (var assembly in assemblies)
            {
                if (assembly is ISorter sorter && sorter.GetIdentifier() == identifier)
                {
                    return assembly;
                }
            }

            throw new Exception("No assembly found with the given identifier");
        }
    }
}