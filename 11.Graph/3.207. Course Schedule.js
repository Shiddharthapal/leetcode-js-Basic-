/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph=new Map();
    let visiting=new Set();

    for(let [course,precourse] of prerequisites){
        if(!graph.has(course)){
            graph.set(course,[]);
        }
        graph.get(course).push(precourse);
    }
    let tempGraph=new Map();
    let dfs=function(course){
        if(visiting.has(course)){
            return false;
        }
        if(tempGraph.has(course)){
            return true;
        }
        tempGraph.set(course,course);
        visiting.add(course);
        if(graph.has(course)){
            for(let precourse of graph.get(course)){
                if(!dfs(precourse)){
                    return false;
                }
            }
        }

        visiting.delete(course);
        return true;
    }

    for(let courseid of graph.keys()){
        if(!dfs(courseid)){
            return false;
        }
    }
    return true;
};
let numCourses = 5;
let prerequisites = [
    // [2, 3],
    // [3, 4],
    [4, 5],
    [5, 1],
    // [1, 2],
    // [1, 3],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
];

console.log(canFinish(numCourses, prerequisites));