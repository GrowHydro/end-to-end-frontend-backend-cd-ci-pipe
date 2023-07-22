exports.handler = async (e) => {
    console.log("event ", e);
    let resMessage = "I'm working"
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: resMessage,
        }),
    }
}