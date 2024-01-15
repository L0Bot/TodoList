const { Task } = require('../models');

const taskController = {

    /**
     * Fonction renvoyant la liste des taches
     * @param {Request} request 
     * @param {Response} response 
     */
    listTasks: async function (request, response) {
        // Récupérer la liste des taches
        const tasks = await Task.findAll();

        // Renvoyer la liste des taches en json
        response.json(tasks);
    },

    /**
     * Fonction créant une nouvelle tache (avec les données POST)
     * @param {Request} request 
     * @param {Response} response 
     */
    createTask: async function (request, response) {
        // On récupère les données transmises par le formulaire
        const taskData = request.body;

        // On enregistre la tâche en BDD
        const task = await Task.create({
            name: taskData.name
        });

        // On renvoie les données completes de la tâche (et notamment son ID) 
        response.json(task);
    },

    /**
     * Fonction créant une nouvelle tache (avec les données PUT)
     * @param {Request} request 
     * @param {Response} response 
     */
    updateTask: async function (request, response) {
        // On récupère les données transmises par le formulaire
        const taskData = request.body;

        // On récupére l'ID de la tâche à modifier
        const taskId = request.params.id;

        // on récupère la tâche en BDD
        const task = await Task.findByPk(taskId);

        // on la modifie
        task.name = taskData.name;

        // On enregistre la tâche modifiée en BDD
        await task.save();

        // On renvoie les données completes de la tâche (et notamment son ID) 
        response.json(task);
    },

    /**
     * Fonction supprimant une tâche (via une requête DELETE)
     * @param {Request} request 
     * @param {Response} response 
     */
    deleteTask: async function (request, response) {

        // On récupére l'ID de la tâche à modifier
        const taskId = request.params.id;

        // on récupère la tâche en BDD
        const task = await Task.findByPk(taskId);

        // On la supprime en BDD
        await task.destroy();

        // On renvoie un booléen de succès
        response.json({success: true});
    },


};

module.exports = taskController;