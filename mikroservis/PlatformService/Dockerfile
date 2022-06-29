#FROM mcr.microsoft.com/dotnet/sdk
#WORKDIR	/app
#COPY . .	
#RUN dotnet restore
#RUN dotnet publish PlatformService.csproj -c Release -o out
#WORKDIR out
#ENV ASPNETCORE_URLS="http://*:3000"
#ENTRYPOINT ["dotnet","PlatformService.dll"]

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR	/app
COPY *.csproj ./
RUN dotnet restore
COPY . ./
RUN dotnet publish -c Release -o out
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /app/out . 
ENTRYPOINT ["dotnet","PlatformService.dll"]

