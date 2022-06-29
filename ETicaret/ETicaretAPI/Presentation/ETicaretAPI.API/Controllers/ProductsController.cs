﻿using ETicaretAPI.Application.Abstractions;
using ETicaretAPI.Application.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly IProductService _productService;
        private readonly IProductWriteRepository _productWriteRepository;
        private readonly IProductReadRepository _productReadRepository;
        public ProductsController(IProductService productService, IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productService = productService;
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
        }
        [HttpGet("GetProducts")]
        public IActionResult GetProducts()
        {
            var products = _productService.GetProducts();
            return Ok(products);
        }

        [HttpGet("Get")]
        public async Task Get()
        {
        await _productWriteRepository.AddRangeAsync(new()
            {
                new(){ Id=Guid.NewGuid(),Name="Product11",Price=100,Stock=10,CreatedDate=DateTime.UtcNow},
                        new(){ Id=Guid.NewGuid(),Name="Product12",Price=200,Stock=20,CreatedDate=DateTime.UtcNow},
                        new(){ Id=Guid.NewGuid(),Name="Product13",Price=300,Stock=30,CreatedDate=DateTime.UtcNow}
            });
        }
    }
}
