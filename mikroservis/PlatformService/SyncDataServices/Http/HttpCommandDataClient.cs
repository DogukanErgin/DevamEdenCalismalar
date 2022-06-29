using PlatformService.Dtos;
using System.Net.Http;
using System.Text;
using System.Text.Json;

namespace PlatformService.SyncDataServices.Http
{
    public class HttpCommandDataClient : ICommandDataClient
    {
        private readonly IConfiguration _configuration;
        private readonly HttpClient _httpClient;

        public HttpCommandDataClient(HttpClient httpClient, IConfiguration configuration)
        {
            _configuration = configuration;
           _httpClient = httpClient;
        }
        public async Task SendPlatformToCommand(PlatformReadDto plat)
        {
            var httpContent = new StringContent(
                JsonSerializer.Serialize(plat),
                Encoding.UTF8,
                "application/json");
            var response = await _httpClient.PostAsync($"{_configuration["CommandService"]}",httpContent);
            if (response.IsSuccessStatusCode)
            {
                Console.WriteLine("--> Sync Post to Commandservice was OK!! ");
            }
            else
            {
                Console.WriteLine("-->Sync Post to Commandservice was not OK!! ");
            }
        }
    }
}
