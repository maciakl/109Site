IS_WINDOWS = (RUBY_PLATFORM =~ /mingw/i) ? true : false
WINPATH = "x:/"
LINPATH = "/remote/msuweb/"

task :build do
    sh "grunt build"
end

task :deploy => [:build] do
    puts "Running task deploy."
    target = IS_WINDOWS ? WINPATH : LINPATH

    puts "Destination path is " + target
    files = FileList[target+"*"].exclude(target+"blog") 
 
    puts "Cleaning up destination directory"
    files.each do |f|
        rm_rf(f)
    end

    puts "Deploying files"
    FileList["dist/~maciakl/*"].each do |f|
        cp_r f, target
    end

    puts "Task completed " + Time.now.to_s
end

task :commit => [:build] do
    puts "Running automated repository commit task..."

    puts "Please enter commit message: "
    msg = STDIN.gets.strip!

    msg = "Auto-commited with Rake (" +Time.now.strftime("%Y-%m-%d")+ ")" if msg.empty?
    sh "git add ."
    sh "git commit -a -m \"" +msg+ "\""
    sh "npm version patch"
    sh "git push"
end

task :default => [:build]

