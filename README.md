[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12757963&assignment_repo_type=AssignmentRepo)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code; you can base yours on test code from other
exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Runtime:

Because my hasCycles function is a very slightly modified version of my depth-first search function it will have a very similar worst case, that being that our second vertex given to hasCycles is either not in the graph or is not connected to the graph which also suggests that in search of that second vector we will traverse every vertex and every edge. Assuming $|V|$ is the number of vertices and $|E|$ is the number of edges, if the vertex of interest is not in the graph the complexity will be $\Theta(|V| + |E|)$ and in the case of it just not being connected to the graph the complexity would be $\Theta((|V| - 1) + |E|)$ The " $-1$ " is to account for the one inaccessible vertex, but seeing as constants are not taken into account in asymptotic analysis the complexity for both is $\Theta(|V| + |E|)$.
