import {useEffect, useState} from "react";
import {enrichCTAQueryParams} from "../utils/queryParamUtils";


export const useGetQueryParams = (): string => {
    const [queryParamsReturn, setQueryParams] = useState(() => {
        const queryParams = enrichCTAQueryParams().toString();
        return queryParams ? `?${queryParams}` : '';
    });

    useEffect(() => {
        if (!globalThis.document) return;
        const queryParams = enrichCTAQueryParams().toString();
        setQueryParams(queryParams ? `?${queryParams}` : '');
    }, []);

    return queryParamsReturn;
};