using FCBapi.Models;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

namespace FCBapi.Controllers
{
	public class PersonController : Controller
	{

		// GET: PersonController/Create
		[HttpPost]
		public JsonResult Create(PersonModel person)
		{
			CRUDOperationResult result;
			result = new CRUDOperationResult(StatusResultEnum.Unknown, "");
			using (var writer = System.IO.File.CreateText(System.IO.Path.GetTempFileName()))
			{
				try
				{
					writer.Write(person);
					result.ActionStatus = StatusResultEnum.InsertSuccess;
					result.StatusMessage = "Insert successful.";
				}
				catch (Exception ex)
				{
					result.ActionStatus = StatusResultEnum.InsertedFailed;
					result.StatusMessage = ex.Message;
				}

			}


			return Json(result);
		}
	
	}
}
