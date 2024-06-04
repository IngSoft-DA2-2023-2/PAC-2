
using MyWebApi.Services.LoadAssembly;

namespace MyWebApi.Services.Validators
{
    public sealed class SortService(ILoadAssemblyService<ISorter> _loadAssemblyService) : ISortService
    {
        public List<string> GetAll()
        {
            var implementations = _loadAssemblyService.GetAll("Sorters"); 
            
            return implementations.ConvertAll(i => i.GetIdentifier());
        }

        public List<int> Sort(string sorter, List<int> numbers)
        {
            var sorterService = _loadAssemblyService.GetByIdentifier(sorter);

            return sorterService.Sort(numbers);
        }
    }
}
