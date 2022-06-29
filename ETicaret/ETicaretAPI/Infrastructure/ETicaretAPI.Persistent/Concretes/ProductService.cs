﻿using ETicaretAPI.Application.Abstractions;
using ETicaretAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Persistent.Concretes
{
    public class ProductService : IProductService
    {
        public List<Product> GetProducts() => new()               //buradaki semantik tekrardan list product türünde olacağını belirtmeden koleksiyon oluşturmayı sağlar.
        {
            new()
            {
                Id= Guid.NewGuid(),Name="Product 1",Price=100,Stock=11
            },         new()
            {
                Id= Guid.NewGuid(),Name="Product 2",Price=200,Stock=12
            },         new()
            {
                Id= Guid.NewGuid(),Name="Product 3",Price=300,Stock=13
            },         new()
            {
                Id= Guid.NewGuid(),Name="Product 4",Price=400,Stock=14
            },         new()
            {
                Id= Guid.NewGuid(),Name="Product 5",Price=500,Stock=15
            }
        };
        
            
        
    }
}