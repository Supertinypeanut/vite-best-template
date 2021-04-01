declare namespace typing {

    interface ServiceAuto {

        /**
         * Get Monthly Csv
         * @method
         */
        GetMonthlyDataQuickpayApiGET(cycle: string, ): Promise < {} >
        ;

        /**
         * Deductdate
         * @method
         */
        DeductFromDataQuickpayApiPOST(): Promise < {} >
        ;

        /**
         * Get All Data
         * @method
         */
        GetDataQuickpayApiGET(): Promise < {} >
        ;

        /**
         * App In Result
         * @method
         */
        Input_appidQuickpayApiGET(date: string, ): Promise < {} >
        ;

        /**
         * Read Root
         * @method
         */
        QuickpayApiGET(date: string, channel: string, ): Promise < {} >
        ;

        /**
         * Temporary Add History
         * @method
         */
        Add_historyTemporaryQuickpayApiGET(date: string, network: string, ): Promise < {} >
        ;

        /**
         * Read App
         * @method
         */
        Item_idAppQuickpayApiGET(item_id: number, ): Promise < {} >
        ;

        /**
         * Get Shareratio
         * @method
         */
        Item_idShareratioQuickpayApiGET(item_id: string, ): Promise < {} >
        ;

        /**
         * List Shareratio
         * @method
         */
        ShareratioQuickpayApiGET(): Promise < {} >
        ;

        /**
         * Add Shareratio
         * @method
         */
        AddShareratioQuickpayApiPOST(id: string, name: string, value: number, note: string, ): Promise < {} >
        ;

        /**
         * List App
         * @method
         */
        AppQuickpayApiGET(): Promise < {} >
        ;

        /**
         * Change Ratio List
         * @method
         */
        ListsChangeShareRatioAppQuickpayApiGET(): Promise < {} >
        ;

        /**
         * Change Ratio
         * @method
         */
        ChangeShareRatioAppQuickpayApiPOST(appkey: string, new_shareratio: string, ): Promise < {} >
        ;

        /**
         * Search Email
         * @method
         */
        EmailSearchQuickpayApiGET(email: string, ): Promise < {} >
        ;

        /**
         * Get Payee Status
         * @method
         */
        PayeeStatusGetQuickpayApiGET(): Promise < {} >
        ;

        /**
         * Get Pay Status
         * @method
         */
        PayStatusGetQuickpayApiGET(): Promise < {} >
        ;

        /**
         * Create Cpm
         * @method
         */
        CreateCpmQuickpayApiPOST(): Promise < {} >
        ;

        /**
         * Get Cpm Lists
         * @method
         */
        ListsCpmQuickpayApiPOST(): Promise < {} >
        ;

        /**
         * History Lists
         * @method
         */
        ListsHistoryQuickpayApiPOST(): Promise < {} >
        ;

        /**
         * Get Settlement
         * @method
         */
        GetSettlementQuickpayApiGET(settlement_id: number, ): Promise < {} >
        ;

        /**
         * Payment Lists
         * @method
         */
        ListsPaymentQuickpayApiPOST(): Promise < {} >
        ;

        /**
         * Tipalti Submit
         * @method
         */
        SubmitTipaltiQuickpayApiPOST(): Promise < {} >
        ;

        /**
         * Export Data
         * @method
         */
        DataExportQuickpayApiPOST(): Promise < {} >
        ;

        /**
         * Health
         * @method
         */
        Health_checkApiGET(): Promise < {} >
        ;

        /**
         * Get Version
         * @method
         */
        VersionApiGET(): Promise < {} >
        ;
    }
}
