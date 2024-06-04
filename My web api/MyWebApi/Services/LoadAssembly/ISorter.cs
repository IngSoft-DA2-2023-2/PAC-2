namespace MyWebApi.Services.LoadAssembly
{
    public interface ISorter
    {
        string GetIdentifier();

        List<int> Sort(List<int> numbers); 
    }
}
