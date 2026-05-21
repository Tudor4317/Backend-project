

export default function logoutController(req,res){
    req.logout((err) =>{
        if (err) {
            return console.error(err)
        }
        res.redirect("/")
    })
}

