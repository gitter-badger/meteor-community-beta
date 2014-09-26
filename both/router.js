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
        template: 'forum-cateorgies',
        path: '/forum',
    });

    this.route('forum-threads', 
    {
        path: '/forum/:category?',
    });

    this.route('forum-thread-view', 
    {
        template: 'forum-thread-view',
        path: '/forum/thread/:_id?',
    });

    this.route('developers', 
    {
        path: '/developers',
    });

    this.route('showcase', 
    {
        path: '/showcase',
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