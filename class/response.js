class Response {
  constructor() {
    this.Error = "Internal Server Error";
    this.NotFound = "not found";
    this.Created = "successfully created";
    this.Success = "success";
    this.BadRequest = "bad request";
    this.Forbidden = "forbidden";
    this.BadGateway = "bad gateway";
    this.ServiceUnavailable = "service unavailable";
  }

  error(res, process) {
    process.status(500);
    return {
      response: res,
      statusCode: 500,
      status: false,
      msg: this.Error,
    };
  }

  notFound(res, process) {
    process.status(404);
    return {
      response: res,
      statusCode: 404,
      status: false,
      msg: this.NotFound,
    };
  }

  badRequest(res, process) {
    process.status(400);
    return {
      response: res,
      statusCode: 400,
      status: false,
      msg: this.BadRequest,
    };
  }

  badGateway(res, process) {
    process.status(502);
    return {
      response: res,
      statusCode: 502,
      status: false,
      msg: this.BadGateway,
    };
  }

  forbidden(res, process) {
    process.status(401);
    return {
      response: res,
      statusCode: 401,
      status: false,
      msg: this.Forbidden,
    };
  }

  serviceUnavailable(res, process) {
    process.status(503);
    return {
      response: res,
      statusCode: 503,
      status: false,
      msg: this.ServiceUnavailable,
    };
  }

  created(res) {
    return { data: res, statusCode: 201, status: true, msg: this.Created };
  }

  success(res) {
    return { data: res, statusCode: 200, status: true, msg: this.Success };
  }
}

module.exports = Response;
