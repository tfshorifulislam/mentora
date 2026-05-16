"use client";
import { AlertDialog, Button } from "@heroui/react";


export function CourseDelete({course}) {
    const {_id} = course;

    const onSubmit = async (e) => {
        const res = await fetch(`http://localhost:5000/mentora/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })

        const courseDelete = await res.json();
        console.log(courseDelete, 'course delete data');
    }


    return (
        <AlertDialog>
            <Button
                className="h-14 rounded-2xl  bg-red-500/10 border border-red-500/20 text-red-400 font-semibold  hover:bg-red-500  hover:text-white transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-red-500/10"
                variant="danger">
                Delete Course
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Course permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{course.title}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={onSubmit} slot="close" variant="danger">
                                Delete Course
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}