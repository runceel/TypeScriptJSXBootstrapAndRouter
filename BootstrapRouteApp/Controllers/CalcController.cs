using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BootstrapRouteApp.Controllers
{
    public class CalcController : ApiController
    {
        public IHttpActionResult Get(int x, int y)
        {
            return Ok(x + y);
        }
    }
}
