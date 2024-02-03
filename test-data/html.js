export default `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Listing</title>
    <style>
        body {
                font-family: arial, sans-serif;
                padding: 3rem 5rem;
            }
        ul { margin-left: 3rem;}
        li { list-style-type: circle; }
    </style>
</head>
<body>
    <h1>Templates:</h1>
    <p>{{note}}</p>
    <ul>
        {{listing}}
    </ul>

    <p>Tags: {{more}},{{mood}}</p>
</body>
</html>`