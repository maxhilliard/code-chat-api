export const OK = (res, statusCode) => {
    return (result) => {
        result = result || 'ok'
        return res.status(statusCode || 200).json({ result, success: true })
    }
}

export const ERROR = (res, statusCode) => {
    return (result) => {
        result = result.message || `There was an error!`
        return res.status(statusCode || 400).json({ result, success: true })
    }
}