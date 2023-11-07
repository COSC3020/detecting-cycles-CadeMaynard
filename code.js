function hasCycle(graph, v1, v2) {  //v1 and v2 are vertices, the idea is that the function answers the question 
                                    //will there be a cycle if I place an edge between these two vertices
    if(v1 == v2){
        return true;
    } else if(graph[v1] == [] || graph[v1][graph[v1].length - 1] == -1) {
        return false;
    } else {
        graph[v1][graph[v1].length] = -1 // This is how I have opted to mark vertices as visited.
        found = false;
        for(i = 0; i < graph[v1].length - 1 && found == false; i++){
            found = hasCycle(graph, graph[v1][i], v2);
        }
        return found;
    }
}
