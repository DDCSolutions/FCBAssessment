namespace FCBapi.Models
{
	public class CRUDOperationResult
	{
		public string StatusMessage { get; set; }

		public StatusResultEnum ActionStatus { get; set; } = StatusResultEnum.Unknown;

		public CRUDOperationResult(StatusResultEnum result, string message)
		{
			this.ActionStatus = result;
			this.StatusMessage = message;
		}


	}
}
