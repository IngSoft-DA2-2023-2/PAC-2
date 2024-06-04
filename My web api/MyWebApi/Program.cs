using MyWebApi.Services.LoadAssembly;
using MyWebApi.Services.Validators;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

var configuration = builder.Configuration;
var services = builder.Services;

services
    .AddScoped(typeof(ILoadAssemblyService<>),typeof(LoadAssemblyService<>))
    .AddScoped<ISortService, SortService>();

var app = builder.Build();

app.UseCors(options =>
{
    options
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.MapControllers();

app.Run();
