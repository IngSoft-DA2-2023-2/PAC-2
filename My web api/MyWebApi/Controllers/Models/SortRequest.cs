namespace MyWebApi.Controllers.Models
{
    public sealed record class SortRequest
    {
        public string? Sorter { get; init; }

        public List<int>? Numbers { get; init; }
    }
}
