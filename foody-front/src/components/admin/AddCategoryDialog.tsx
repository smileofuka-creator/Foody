"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import axios from "axios"






const AddCategoryDialog = ({getCategories}:{getCategories: ()=> void; }) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        console.log("Event", e);
        setValue(e.target.value);
    };

    const addNewCategory = async ()=> {
        await axios.post("http://localhost:3005/category",{
            categoryName: value,
        });
        getCategories();

    };
    return (
        <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg hover:bg-red-600 transition">
                                    <Plus/>
                                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Add new category</DialogTitle>
                  
                    </DialogHeader>
                    <p>Category Name</p>
                    <input placeholder="Type category name ..."
                    value={value}
                    onChange={handleChange}/>
                    <DialogClose asChild>
                          <Button onClick={addNewCategory}>Add</Button>
                    </DialogClose>
                </DialogContent>
                </Dialog>
    )
}

export default AddCategoryDialog