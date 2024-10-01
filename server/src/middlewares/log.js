export const log = (req , res , next ) => {
    console.info(`${new Date().toLocaleString()}  method "${req.method}" on path "${req.path}"`)
    next()
}