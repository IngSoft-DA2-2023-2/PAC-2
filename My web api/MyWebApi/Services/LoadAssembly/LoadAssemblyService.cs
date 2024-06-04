using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace MyWebApi.Services.LoadAssembly
{
    public sealed class LoadAssemblyService<T> : ILoadAssemblyService<T>
        where T : class
    {
        public List<T> GetAll(string directory)
        {
            var assemblies = Directory.GetFiles(directory, "*.dll")
                .Select(Assembly.LoadFrom)
                .ToList();

            var implementations = assemblies
                .SelectMany(a => a.GetTypes())
                .Where(t => typeof(T).IsAssignableFrom(t) && !t.IsInterface && !t.IsAbstract)
                .Select(Activator.CreateInstance)
                .OfType<T>()
                .ToList();

            return implementations;
        }

        public T GetByIdentifier(string identifier)
        {
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();

            var implementation = assemblies
                .SelectMany(a => a.GetTypes())
                .Where(t => typeof(T).IsAssignableFrom(t) && !t.IsInterface && !t.IsAbstract)
                .Select(Activator.CreateInstance)
                .OfType<T>()
                .FirstOrDefault(i => GetIdentifier(i) == identifier);

            if (implementation == null)
            {
                throw new InvalidOperationException($"No se encontró una implementación de '{typeof(T).Name}' con el identificador '{identifier}'.");
            }

            return implementation;
        }
        
        private string GetIdentifier(T implementation)
        {
            // Aquí asumimos que las implementaciones tienen un método GetIdentifier().
            // Asegúrate de reemplazar esto con la lógica adecuada para obtener el identificador de tus implementaciones.
            var method = typeof(T).GetMethod("GetIdentifier");
            if (method != null)
            {
                return method.Invoke(implementation, null) as string;
            }
            else
            {
                throw new InvalidOperationException($"La implementación de '{typeof(T).Name}' no tiene un método 'GetIdentifier'.");
            }
        }
    }
}