import { db } from '@/firebase'
import { fb } from '@/firebase'

// Reference collection in my database
const projectRef = db.collection('projects')

export const ProjectService = {
    // Retrieve projects in my database
    async getProject() {
        const projectDoc = await projectRef.get() 
        const project = projectDoc.docs.map(project => Object.create({ ...project.data(), id: project.id}))

        return project
    },
    // Add a new project in my database
    async addProject(project) {
        const result = await projectRef.add(project)
        return result.id
    },
    // Remove project in my database
    removeProject(project) {
        projectRef.doc(project.id).delete()
    },
    // Upload image on cloud storage
    uploadImage(e) {
        const file = e.target.files[0]
        const storageRef = fb.storage().ref('project-images/' + file.name)
        const uploadTask = storageRef.put(file)
        uploadTask.on('state_changed', (snapshot) => {

            console.log(snapshot)

        }, (error) => {

            console.log(error)

        }, () => {

            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log(downloadURL)
            });
            
        }); 
    }
}