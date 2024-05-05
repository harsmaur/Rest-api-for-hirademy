import assistantModel from "../Models/assistantSchema.js";

export const assistantCreate = async(req, res)=>{
    try {
        const { name, mobile, email, salary, city, country, department, role} = req.body;

        if( name && mobile && email && salary && city && country && department && role){
           
            const doc = new assistantModel({
                
                name: name,
                mobile: mobile,
                email: email,
                salary: salary,
                city: city,
                country: country,
                department: department,
                role: role

            })
            await doc.save();
            res.status(201).json({ message: "Assistant created successfully", data: doc });

        }else{
            res.status(400).json({ message: "Missing required fields" });
        }
    } catch (error) {
        console.error("Error creating assistant:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const assistantUpdate = async (req, res) => {
    try {
        const _id = req.params.id;
        const { name, mobile, email, salary, city, country, department, role } = req.body;

        if ( name && mobile && email && salary && city && country && department && role) {
            const updatedDoc = await assistantModel.findByIdAndUpdate(_id, {
                name: name,
                mobile: mobile,
                email: email,
                salary: salary,
                city: city,
                country: country,
                department: department,
                role: role
            }, { new: true });

            if (updatedDoc) {
                res.status(200).json({ message: "Assistant updated successfully", data: updatedDoc });
            } else {
                res.status(404).json({ message: "Assistant not found" });
            }
        } else {
            res.status(400).json({ message: "Missing required fields" });
        }
    } catch (error) {
        console.error("Error updating assistant:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const assistantRead = async (req, res) => {
    try {
        const _id = req.params.id;
        const doc = await assistantModel.findById(_id);
        
        if (doc) {
            res.status(200).json({ message: "Assistant found", data: doc });
        } else {
            res.status(404).json({ message: "Assistant not found" });
        }
    } catch (error) {
        console.error("Error fetching assistant:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const assistantDelete = async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedDoc = await assistantModel.findByIdAndDelete(_id);
        
        if (deletedDoc) {
            res.status(200).json({ message: "Assistant deleted successfully", data: deletedDoc });
        } else {
            res.status(404).json({ message: "Assistant not found" });
        }
    } catch (error) {
        console.error("Error deleting assistant:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

