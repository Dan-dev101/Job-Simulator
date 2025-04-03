let tasksObject = {}

fetch("http://localhost:8080/api/v1/task")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
        data.forEach(function(task) {
            tasksObject[task.taskId] = {
                title: task.taskName,
                description: task.description,
                difficulty: task.difficulty,
                deadline: task.deadline,
                language: task.language,
                python: task.pythonCodeWithBug,
                javascript: task.jsCodeWithBug,
                exampleOutput: task.expectedOutput
            };
        });

        console.log(tasksObject)
    })
    .catch(function(error) {
        console.error("Error fetching tasks:", error);
    });



// ============================
// TASKS DATA
// ============================


// ============================
// MONACO EDITOR CONFIGURATION
// ============================
require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], function() {
    let editor = monaco.editor.create(document.getElementById('container'), {
        value: '// some comment\nconsole.log("Hello, world!");',
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true
    });

    let outputElement = document.getElementById('output');

    // ============================
    // SKULPT CONFIGURATION (PYTHON)
    // ============================
    function outf(text) {
        outputElement.textContent += text;
    }

    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    // ============================
    // TASK MANAGEMENT
    // ============================
    let currentTaskContent = { python: '', javascript: '' };

    function loadTask(taskNumber) {
        const taskContent = tasksObject[taskNumber];
        currentTaskContent.python = taskContent.python;
        currentTaskContent.javascript = taskContent.javascript;
        const selectedLanguage = document.getElementById('language-selector').value;
        editor.setValue(taskContent[selectedLanguage]);
        monaco.editor.setModelLanguage(editor.getModel(), selectedLanguage);
    }

    // ============================
    // LANGUAGE SWITCHER
    // ============================
    document.getElementById('language-selector').addEventListener('change', function(event) {
        let language = event.target.value;
        monaco.editor.setModelLanguage(editor.getModel(), language);
        editor.setValue(currentTaskContent[language]);
    });

    // ============================
    // RUNNING CODE
    // ============================
    document.getElementById('run-button').addEventListener('click', function() {
        let code = editor.getValue();
        outputElement.textContent = '';

        let language = document.getElementById('language-selector').value;

        if (language === 'javascript') {
            try {
                let originalConsoleLog = console.log;

                // Capture console.log output and display it in the output box
                console.log = function(message) {
                    outputElement.textContent += message + '\n';
                    originalConsoleLog(message); // Also log to the browser console
                };

                eval(code); // Execute JavaScript code

                // Restore the original console.log
                console.log = originalConsoleLog;
            } catch (error) {
                outputElement.textContent = 'Error: ' + error.message;
            }
        } 
        
        else if (language === 'python') {
            // Configure Skulpt
            Sk.configure({
                output: outf,
                read: builtinRead,
                __future__: Sk.python3
            });

            // Run Python code
            try {
                Sk.misceval.asyncToPromise(function() {
                    return Sk.importMainWithBody("<stdin>", false, code, true);
                }).then(
                    function(mod) {
                        if (outputElement.textContent === '') {
                            outputElement.textContent = 'Code executed successfully but produced no output.';
                        }
                    },
                    function(err) {
                        outputElement.textContent = err.toString();
                    }
                );
            } catch (error) {
                outputElement.textContent = 'Error: ' + error.message;
            }
        }
    });

    // ============================
    // TASK SELECTOR HANDLING
    // ============================
    document.querySelectorAll('.load-task-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            const taskNumber = button.dataset.task;

            console.log('Loading task with ID:', taskNumber);
            console.log('Task from tasksObject:', tasksObject[taskNumber]);


            loadTask(taskNumber);
            const task = tasksObject[taskNumber];

            const taskPanel = document.querySelector('.tasks-panel');

            let stepsList = "undefined";
            if (tasksObject.steps && tasksObject.steps.length > 0) {
                stepsList = '<ul class="task-steps">';
                tasksObject.steps.forEach(function (item) { 
                    stepsList += `<li>${item}</li>`;
                });
                stepsList += "</ul>";
            }

            const detailBox = document.querySelector('.task-detail-panel');
            detailBox.innerHTML = `
                <div class="detailBox">
                    <h2>${task.title}</h2> 
                    <p class="description">${task.description}</p> 
                    <p class="deadline"><strong>Deadline:</strong> ${task.deadline}</p>
                    <p class="difficulty"><strong>Difficulty:</strong> ${task.difficulty}</p>
                    <p class="exampleOutput"><strong>Expected Output:</strong> ${task.exampleOutput}</p>
                    <h3>Steps:</h3>
                    ${stepsList}
                    <button class="close-task"> X </button>
                </div> 
            `;

            detailBox.style.display = 'block';
            taskPanel.style.display = 'none';

            document.querySelector('.close-task').addEventListener('click', function() {
                detailBox.style.display = 'none';
                taskPanel.style.display = 'block';
            });
        });
    });
});
