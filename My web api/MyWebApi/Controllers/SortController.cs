using Microsoft.AspNetCore.Mvc;
using MyWebApi.Controllers.Models;
using MyWebApi.Services.Validators;

namespace MyWebApi.Controllers
{
    [ApiController]
    [Route("sorters")]
    public sealed class SortController(ISortService _sortService) : ControllerBase
    {
        [HttpGet]
        public List<string> GetAll()
        {
            return _sortService.GetAll();
        }

        [HttpPost]
        public List<int> UseSort(SortRequest? request)
        {
            if(request == null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            if (string.IsNullOrEmpty(request.Sorter))
            {
                throw new Exception("Invalid sorter");
            }

            if(request.Numbers == null)
            {
                throw new Exception("Invalid numbers");
            }

            return _sortService.Sort(request.Sorter, request.Numbers);
        }
    }
}
