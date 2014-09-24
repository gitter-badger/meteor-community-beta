/*****************************************************************************/
/* Router
/*****************************************************************************/

Router.configure(
{
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
});

Router.map(function() 
{
    this.route('home', 
    {
        path: '/',
    });

    this.route('home', 
    {
        path: '/home',
    });

    this.route('forum', 
    {
        path: '/forum',
    });

    this.route('developers', 
    {
        path: '/developers',
    });

    this.route('jobs', 
    {
        path: '/jobs',
    });

    this.route('chat', 
    {
        path: '/chat',
    });

    this.route('events', 
    {
        path: '/events',
    });

    this.route('resources', 
    {
        path: '/resources',
    });

    this.route('articles', 
    {
        path: '/articles',
    });
});