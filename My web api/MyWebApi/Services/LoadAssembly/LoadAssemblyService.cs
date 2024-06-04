
using System.IO;
using System.Reflection;

namespace MyWebApi.Services.LoadAssembly
{
    public sealed class LoadAssemblyService<T> : ILoadAssemblyService<T>
        where T : class
    {
        public List<T> GetAll(string directory)
        {
            throw new NotImplementedException();
        }

        public T GetByIdentifier(string identifier)
        {
            throw new NotImplementedException();
        }
    }
}
