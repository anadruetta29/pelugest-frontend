import { HTTPClient } from "../../core";
import { ErrorHandler, RecordStatusDataSourceI, type FindRecordStatusByNameReq, type FindRecordStatusByNameRes } from "../../domain";

export class RecordStatusApiDataSource implements RecordStatusDataSourceI {

    private httpClient: HTTPClient;
    
    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async findByName(dto: FindRecordStatusByNameReq): Promise<FindRecordStatusByNameRes> {
        try {
            const response = await this.httpClient.get(
                `/api/record-status/name/${dto.name}`,
                undefined,
                dto.session.getAccessToken()
            );


            if (response.error) {
            throw ErrorHandler.handleError(response.error);
            }

            return response;
        } 
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
}