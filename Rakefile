IS_WINDOWS = (RUBY_PLATFORM =~ /mingw/i) ? true : false
WINPATH = "x:/"
LINPATH = "/remote/msuweb/"

#task :build do
#    puts "Running task build to local directory dist/"
#    target = "dist"
#    remove_dir(target) if File.directory?(target)
#    mkdir(target)
#    cp_r "components", target
#    files = FileList["*.html", "*.JPG", "*.png", "*.txt", "*.ico", "*.js", "*.css"].exclude("grunt.js")
#    
#    files.each do |f|
#        cp f, target
#    end
#end

task :build do
    sh "nanoc compile"
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
    FileList["dist/*"].each do |f|
        cp_r f, target
    end

    puts "Task completed " + Time.now.to_s
end

task :default => [:build]

