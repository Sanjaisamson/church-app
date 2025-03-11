class CreateCustomError extends Error{
    statusCode: any
    constructor(message: string, statusCode: any){
        super(message)
        this.statusCode = statusCode;
        this.name = statusCode >= 400 && statusCode < 500 ? 'Operational Error' : 'Server Error'
    }
}

export default CreateCustomError;