"Hello world" |> console.log;
f = x => x + 1;
g = x => x - 1;
a = 10 |> f |> f |> f;
b = 10 |> g |> g |> g;
`a=${a}, b=${b}` |> console.log;
a + b |> f |> g |> console.log;