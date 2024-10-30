
export function hubAI() {
    let _ai = {
        async run(model: string, params?: Record<string, unknown>) {
            const url = 'http://1893706806886638.cn-beijing.pai-eas.aliyuncs.com/api/predict/prod_llama2_as_en_12b_mistral_0929v_1029_w/v1/chat/completions';
            // const response = await $fetch(url, {
            return $fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    // 'prompt':'hello',
                    'model':'llama2_as_en_12b_mistral_0929v_1029_w',
                    ...params,
                }),
                headers: {
                    authorization: `Bearer NGY0NmNjM2QzNmRhYWFhZmNhMWVhMTM3Yjg1NzY4OTMwZjkwZTdmYw==`,
                    "Content-Type": "application/json",
                },
                responseType: params?.stream ? 'stream' : undefined
    
            }); // 使用 await 等待异步操作
            // return response;
    
            // return $fetch(`/api/projects/${hub.projectKey}/ai/run`, {
            //     baseURL: hub.url,
            //     method: 'POST',
            //     headers: {
            //     authorization: `Bearer ${hub.userToken}`
            //     },
            //     body: { model, params },
            //     responseType: params?.stream ? 'stream' : undefined
            // }).catch(handleProxyError)
        }
    }
    return _ai;
}

// async function handleProxyError(err: Error) {
//     throw createError({
//       statusCode: err.statusCode,
//       message: err.data?.message || err.message
//     })
// }