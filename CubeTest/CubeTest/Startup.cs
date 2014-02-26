using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CubeTest.Startup))]
namespace CubeTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
