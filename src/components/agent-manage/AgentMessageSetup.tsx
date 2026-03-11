export function AgentMessageSetup() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-6">Agent Message Setup</h2>
      
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">First Message</label>
          <textarea 
            className="w-full h-32 bg-[#121212] border border-border rounded-xl p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
            placeholder="Type message"
            defaultValue=""
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Closing Message</label>
          <textarea 
            className="w-full h-32 bg-[#121212] border border-border rounded-xl p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
            placeholder="Type message"
            defaultValue=""
          />
        </div>
      </div>
      
      <div className="mt-8">
        <button className="w-full bg-primary hover:bg-[#22C55E]/90 text-black font-semibold py-3.5 rounded-xl transition-colors">
          Save Message
        </button>
      </div>
    </div>
  );
}
