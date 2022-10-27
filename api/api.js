const { async } = require("@firebase/util");
const {DB} = require("../firebase/admin");

exports.service = async(req , res) =>{
    const userref = DB.collection("users");
        try {
            userref.get().then(snapshot => {
                const data= snapshot.docs.map(doc => ({
                    id : doc.id,
                    ...doc.data()

                }))
                return res.json(data);
            })
        } catch (error) {
            return res.json({
                error:error
            })
        }

}