import {
    HttpClient as IAxiosService
} from '@/utils';
/**
 *
 * @class Test
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export default class {
    public http: IAxiosService;
    public constructor(http: IAxiosService) {
        this.http = http;
    }

    /**
     * Get Monthly Csv
     * @method
     */
    public async GetMonthlyDataQuickpayApiGET(cycle: string, ): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/getMonthlyData", {
                cycle: cycle,
            });
            return result;
        }
    /**
     * Deductdate
     * @method
     */
    public async DeductFromDataQuickpayApiPOST(): Promise < {} >
        {
            const result: {} = await this.http.post(`/api/quickpay/deductFromData?`, );
            return result;
        }
    /**
     * Get All Data
     * @method
     */
    public async GetDataQuickpayApiGET(): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/getData", {});
            return result;
        }
    /**
     * App In Result
     * @method
     */
    public async Input_appidQuickpayApiGET(date: string, ): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/input_appid", {
                date: date,
            });
            return result;
        }
    /**
     * Read Root
     * @method
     */
    public async QuickpayApiGET(date: string, channel: string, ): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/", {
                date: date,
                channel: channel,
            });
            return result;
        }
    /**
     * Temporary Add History
     * @method
     */
    public async Add_historyTemporaryQuickpayApiGET(date: string, network: string, ): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/temporary/add_history", {
                date: date,
                network: network,
            });
            return result;
        }
    /**
     * Read App
     * @method
     */
    public async Item_idAppQuickpayApiGET(item_id: number, ): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/app/{item_id}", {});
            return result;
        }
    /**
     * Get Shareratio
     * @method
     */
    public async Item_idShareratioQuickpayApiGET(item_id: string, ): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/shareratio/{item_id}", {});
            return result;
        }
    /**
     * List Shareratio
     * @method
     */
    public async ShareratioQuickpayApiGET(): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/shareratio/", {});
            return result;
        }
    /**
     * Add Shareratio
     * @method
     */
    public async AddShareratioQuickpayApiPOST(id: string, name: string, value: number, note: string, ): Promise < {} >
        {
            const result: {} = await this.http.post(`/api/quickpay/shareratio/add?id=${ id }&name=${ name }&value=${ value }&note=${ note }&`, );
            return result;
        }
    /**
     * List App
     * @method
     */
    public async AppQuickpayApiGET(): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/app/", {});
            return result;
        }
    /**
     * Change Ratio List
     * @method
     */
    public async ListsChangeShareRatioAppQuickpayApiGET(): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/app/changeShareRatio/lists", {});
            return result;
        }
    /**
     * Change Ratio
     * @method
     */
    public async ChangeShareRatioAppQuickpayApiPOST(appkey: string, new_shareratio: string, ): Promise < {} >
        {
            const result: {} = await this.http.post(`/api/quickpay/app/changeShareRatio?appkey=${ appkey }&new_shareratio=${ new_shareratio }&`, );
            return result;
        }
    /**
     * Search Email
     * @method
     */
    public async EmailSearchQuickpayApiGET(email: string, ): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/search/email", {
                email: email,
            });
            return result;
        }
    /**
     * Get Payee Status
     * @method
     */
    public async PayeeStatusGetQuickpayApiGET(): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/get/payeeStatus", {});
            return result;
        }
    /**
     * Get Pay Status
     * @method
     */
    public async PayStatusGetQuickpayApiGET(): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/get/payStatus", {});
            return result;
        }
    /**
     * Create Cpm
     * @method
     */
    public async CreateCpmQuickpayApiPOST(): Promise < {} >
        {
            const result: {} = await this.http.post(`/api/quickpay/cpm/create?`, );
            return result;
        }
    /**
     * Get Cpm Lists
     * @method
     */
    public async ListsCpmQuickpayApiPOST(): Promise < {} >
        {
            const result: {} = await this.http.post(`/api/quickpay/cpm/lists?`, );
            return result;
        }
    /**
     * History Lists
     * @method
     */
    public async ListsHistoryQuickpayApiPOST(): Promise < {} >
        {
            const result: {} = await this.http.post(`/api/quickpay/history/lists?`, );
            return result;
        }
    /**
     * Get Settlement
     * @method
     */
    public async GetSettlementQuickpayApiGET(settlement_id: number, ): Promise < {} >
        {
            const result: {} = await this.http.get("/api/quickpay/settlement/get", {
                settlement_id: settlement_id,
            });
            return result;
        }
    /**
     * Payment Lists
     * @method
     */
    public async ListsPaymentQuickpayApiPOST(): Promise < {} >
        {
            const result: {} = await this.http.post(`/api/quickpay/payment/lists?`, );
            return result;
        }
    /**
     * Tipalti Submit
     * @method
     */
    public async SubmitTipaltiQuickpayApiPOST(): Promise < {} >
        {
            const result: {} = await this.http.post(`/api/quickpay/tipalti/submit?`, );
            return result;
        }
    /**
     * Export Data
     * @method
     */
    public async DataExportQuickpayApiPOST(): Promise < {} >
        {
            const result: {} = await this.http.post(`/api/quickpay/export/data?`, );
            return result;
        }
    /**
     * Health
     * @method
     */
    public async Health_checkApiGET(): Promise < {} >
        {
            const result: {} = await this.http.get("/api/health_check", {});
            return result;
        }
    /**
     * Get Version
     * @method
     */
    public async VersionApiGET(): Promise < {} >
        {
            const result: {} = await this.http.get("/api/version", {});
            return result;
        }
}
