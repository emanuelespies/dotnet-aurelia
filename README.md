# dotnet-aurelia : Contact Manager Tutorial

Followed tutorial from aurelia website : https://aurelia.io/docs/tutorials/creating-a-contact-manager#setting-up-your-machine

## `dotnet` template
To have the same SPA startup you can use:

```
dotnet new --install "Microsoft.AspNetCore.SpaTemplates"
dotnet new aurelia
```

### Before commit
You will need to update `DotnetCore.csproj`, line 11:
```
  <PackageReference Include="Microsoft.AspNetCore.All" Version="2.0.9" />
```
To a new version for security reasons.
