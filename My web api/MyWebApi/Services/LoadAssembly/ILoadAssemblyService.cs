namespace MyWebApi.Services.LoadAssembly
{
    public interface ILoadAssemblyService<T> where T : class
    {
        List<T> GetAll(string directory);

        T GetByIdentifier(string identifier);
    }
}
