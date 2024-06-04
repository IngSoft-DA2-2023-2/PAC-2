namespace MyWebApi.Services.Validators
{
    public interface ISortService
    {
        List<string> GetAll();

        List<int> Sort(string sorter, List<int> numbers);
    }
}
