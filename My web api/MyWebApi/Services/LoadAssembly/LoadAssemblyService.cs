
using System.IO;
using System.Reflection;

namespace MyWebApi.Services.LoadAssembly
{
    public sealed class LoadAssemblyService<T> : ILoadAssemblyService<T>
        where T : class
    {
        private List<T> _types;
        public List<T> GetAll(string directory)
        {
            _types = new List<T>();

            foreach (var file in Directory.GetFiles(directory, "*.dll"))
            {
                var assembly = Assembly.LoadFrom(file);

                foreach (var type in assembly.GetTypes())
                {
                    if (type.GetInterfaces().Contains(typeof(T)))
                    {
                        var instance = Activator.CreateInstance(type) as T;
                        _types.Add(instance);
                    }
                }
            }
            return _types;
        }

        public T GetByIdentifier(string identifier)
        {
            return _types.FirstOrDefault(t => t.GetType().FullName == identifier);
        }
    }
}
