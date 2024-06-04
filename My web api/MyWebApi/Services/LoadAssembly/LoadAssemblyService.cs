
using System.IO;
using System.Reflection;

namespace MyWebApi.Services.LoadAssembly
{
    public sealed class LoadAssemblyService<T> : ILoadAssemblyService<T>
        where T : class
    {
        private const string ImportersPath = "./FileImporters";

        public List<T> GetAll(string directory)
        {
            string[] filePaths = Directory.GetFiles(directory, "*.dll");
            List<T> availableImporters = new();
            
            foreach (string file in filePaths)
            {
                if (FileIsDll(file)) 
                {
                    FileInfo dllFile  = new (file); 
                    Assembly myAssembly = Assembly.LoadFile(dllFile.FullName); 

                    foreach (Type type in myAssembly.GetTypes()) 
                    {
                        if (typeof(T).IsAssignableFrom(type) && !type.IsInterface)
                        {
                            T instance = (T)Activator.CreateInstance(type)!;
                            availableImporters.Add(instance);
                        }
                    }
                }
            }
            return availableImporters;
        }
        
        private static bool FileIsDll(string file)
        {
            return file.EndsWith("dll");
        }

        public T GetByIdentifier(string identifier)
        {
            string[] filePaths = Directory.GetFiles(ImportersPath, "*.dll");
          
            T? importer = GetAll(ImportersPath)
                .FirstOrDefault(i => i.GetType().Equals(identifier));

            return importer;
        }
    }
}
