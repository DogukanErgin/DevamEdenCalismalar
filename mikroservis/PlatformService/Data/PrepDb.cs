using Microsoft.Extensions.DependencyInjection;
using PlatformService.Models;

namespace PlatformService.Data
{
    public static class PrepDb  //static olduğu için dependecy injection yapılmıyor
    {
        public static void PrepPopulation(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                SeedData(serviceScope.ServiceProvider.GetService<AppDbContext>());
            }

        }
        private static void SeedData(AppDbContext context) {
            
            if (!context.Platforms.Any()) {
                Console.WriteLine("---> Seeding Data...");
                context.Platforms.AddRange(
                    new Platform()
                    {
                        Name ="Dotnet", Publisher="Microsoft",Cost="Free",Id=1
                    },  new Platform(){
                    Name = "Dotnet1", Publisher = "Microsoft1",Cost = "Free",Id=2
                    }, new Platform()
                    {
                    Name = "Dotnet2", Publisher = "Microsoft2",Cost = "Free",Id =3
                    }
                    );
                context.SaveChanges();
            }
            else
            {
                Console.WriteLine("---> We already have data");
            }
        }
    }
}
