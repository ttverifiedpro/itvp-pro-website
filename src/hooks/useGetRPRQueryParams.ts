import {useEffect, useState} from "react";
import {enrichRPRQueryParams} from "../utils/queryParamUtils";


export const useGetRPRQueryParams = (): string => {
    const [queryParamsReturn, setQueryParams] = useState(() => {
        const queryParams = enrichRPRQueryParams().toString();
        return queryParams ? `?${queryParams}` : '';
    });

    useEffect(() => {
        if (!globalThis.document) return;
        const queryParams = enrichRPRQueryParams().toString();
        setQueryParams(queryParams ? `?${queryParams}` : '');
    }, []);

    return queryParamsReturn;
};